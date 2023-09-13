<template>
  <Repl :editor="CodeMirror" />
</template>

<script setup>
import { Repl } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import '@vue/repl/style.css'
</script>

