<template>
    <div>
        <el-row class="mb-4">
            <el-button>default</el-button>
            <el-button
                v-for="(btn, index) in buttons"
                :key="index"
                :type="btn"
            >{{btn}}</el-button>
        </el-row>
    </div>
</template>

<script setup lang="ts">
    import {reactive} from 'vue'

    const buttons = reactive(['primary', 'success', 'info', 'warning', 'danger'])

</script>

<style scoped></style>
