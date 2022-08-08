var Netmask, atob, chr, chr0, chrA, chra, ip2long, long2ip;

chr = function(b) {
  return b.charCodeAt(0);
};

chr0 = chr('0');

chra = chr('a');

chrA = chr('A');

atob = function(s) {
  var base, dmax, i, n, start;
  n = 0;
  base = 10;
  dmax = '9';
  i = 0;
  if (s.length > 1 && s[i] === '0') {
    if (s[i + 1] === 'x' || s[i + 1] === 'X') {
      i += 2;
      base = 16;
    } else if ('0' <= s[i + 1] && s[i + 1] <= '9') {
      i++;
      base = 8;
      dmax = '7';
    }
  }
  start = i;
  while (i < s.length) {
    if ('0' <= s[i] && s[i] <= dmax) {
      n = (n * base + (chr(s[i]) - chr0)) >>> 0;
    } else if (base === 16) {
      if ('a' <= s[i] && s[i] <= 'f') {
        n = (n * base + (10 + chr(s[i]) - chra)) >>> 0;
      } else if ('A' <= s[i] && s[i] <= 'F') {
        n = (n * base + (10 + chr(s[i]) - chrA)) >>> 0;
      } else {
        break;
      }
    } else {
      break;
    }
    if (n > 0xFFFFFFFF) {
      throw new Error('too large');
    }
    i++;
  }
  if (i === start) {
    throw new Error('empty octet');
  }
  return [n, i];
};

Netmask = (function() {
  function Netmask(net) {     // 192.23.22.2/23
    var error, i, j, ref;
    ref = net.split('/', 2);
    net = ref[0];   // 192.23.22.2
    mask = ref[1] || 32;  // 23

    if (mask || mask === 0) {
      this.bitmask = parseInt(mask, 10);
      this.maskLong = 0;
      if (this.bitmask > 0) {
        this.maskLong = (0xffffffff << (32 - this.bitmask)) >>> 0;  // 掩码十进制
      }
    } 

    try {
      this.netLong = (ip2long(net) & this.maskLong) >>> 0;
    } catch (_error) {
      error = _error;
      throw new Error("Invalid net address: " + net);
    }
    if (!(this.bitmask <= 32)) {
      throw new Error("Invalid mask for ip4: " + mask);
    }
    this.size = Math.pow(2, 32 - this.bitmask);
    this.base = long2ip(this.netLong);
    this.mask = long2ip(this.maskLong);
    this.hostmask = long2ip(~this.maskLong);
    this.first = this.bitmask <= 30 ? long2ip(this.netLong + 1) : this.base;
    this.last = this.bitmask <= 30 ? long2ip(this.netLong + this.size - 2) : long2ip(this.netLong + this.size - 1);
    this.broadcast = this.bitmask <= 30 ? long2ip(this.netLong + this.size - 1) : void 0;
  }

  Netmask.prototype.contains = function(ip) {
    if (typeof ip === 'string' && (ip.indexOf('/') > 0 || ip.split('.').length !== 4)) {
      ip = new Netmask(ip);
    }
    if (ip instanceof Netmask) {
      return this.contains(ip.base) && this.contains(ip.broadcast || ip.last);
    } else {
      return (ip2long(ip) & this.maskLong) >>> 0 === (this.netLong & this.maskLong) >>> 0;
    }
  };

  Netmask.prototype.next = function(count) {
    if (count == null) {
      count = 1;
    }
    return new Netmask(long2ip(this.netLong + (this.size * count)), this.mask);
  };

  Netmask.prototype.forEach = function(fn) {
    var index, lastLong, long;
    long = ip2long(this.first);
    lastLong = ip2long(this.last);
    index = 0;
    while (long <= lastLong) {
      fn(long2ip(long), long, index);
      index++;
      long++;
    }
  };

  Netmask.prototype.toString = function() {
    return this.base + "/" + this.bitmask;
  };

  return Netmask;

})();

exports.ip2long = ip2long;

exports.long2ip = long2ip;

exports.Netmask = Netmask;
