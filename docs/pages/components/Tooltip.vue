<template>
<div>

<pre class="code">import { Tooltip } from `@dsbn/slate-vue`</pre>

<demo title="Tooltips" code='<button class="btn btn--primary" v-tooltip="`Has tooltip`">Hover Me</button>'>
    <button class="btn btn--primary" v-tooltip="`Has tooltip`">Hover Me</button>
</demo>
</div>
</template>

<script>
export default {
    name: 'DocTooltip',
    data() { return { time: '' }}
}
</script>