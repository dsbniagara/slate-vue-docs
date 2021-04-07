<template>
<div>

<pre class="code">import Dropdown from '@dsbn/slate-vue/component/Dropdown'</pre>

<demo title="Button dropdown" code=''>
    <dropdown text="Left">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 2</a>
        <a class="dropdown-item" href="#">Item 3</a>
    </dropdown>
    <dropdown text="Center" btn="primary" position="center">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 2</a>
        <a class="dropdown-item" href="#">Item 3</a>
    </dropdown>
    <dropdown text="Primary, Right" btn="primary" position="right">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 2</a>
        <a class="dropdown-item" href="#">Item 3</a>
    </dropdown>
</demo>

<demo title="Show on hover" code=''>
    <dropdown text="Dropdown" trigger="hover">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 2</a>
    </dropdown>
</demo>
</div>
</template>

<script>
export default {
    name: 'DocDropdown'
}
</script>