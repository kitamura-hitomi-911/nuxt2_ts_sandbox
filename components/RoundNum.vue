<template>
  <div>
    <p>丸数字変換</p>
    <input type="text" v-model="inputVal" />
    <p>結果：{{ outputVal }}</p>
    <p>結果（タグ入り）：{{ outputVal2 }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { roundNumToNum } from '@/logic/roundNum'

export default defineComponent({
  setup() {
    const inputVal = ref('')
    const outputVal = computed(() => roundNumToNum({ tgtStr: inputVal.value }))
    const outputVal2 = computed(() =>
      roundNumToNum({
        tgtStr: inputVal.value,
        replaceFunc: (num: number) => '<span>' + num + '</span>',
      })
    )
    return { inputVal, outputVal, outputVal2 }
  },
})
</script>
