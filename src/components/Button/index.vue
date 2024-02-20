<template>
    <el-row class="mb-4">
        <el-button
            v-for="(btn, index) in buttons"
            :key="index"
            :type="btn.type"
            @click="onclick(btn.name)"
        >{{btn.name}}</el-button>
    </el-row>
</template>

<script setup lang="ts">
    import {reactive} from 'vue'
    import { useRouter } from 'vue-router';

    const buttons = reactive([
        {
            name: 'Default',
            type: 'default'
        },
        {
            name: 'Primary',
            type: 'primary'
        },
        {
            name: 'Success',
            type: 'success'
        },
        {
            name: 'Info',
            type: 'info'
        },
        {
            name: 'Warning',
            type: 'warning'
        },
        {
            name: 'Danger',
            type: 'danger'
        }
    ])
    const router = useRouter()

    function onclick (name: string) {
        router.push({
            name
        })
    }
</script>
