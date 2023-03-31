<template>
    <div class="container mx-auto h-full mt-10">
        <div class="font-bold">Browser language: {{ usersLanguage }}</div>
        <div>This is a demo page for translation.</div>
        <select v-model="selected">
            <option disabled value="">Please select language</option>
            <option v-for="lang in languages">{{ lang }}</option>
        </select>
    </div>
    <div>{{ $t('hello') }}</div>
    <!-- <h1>{{ $translate('en.hello') }}</h1>
    <h1>{{ $translate('gu.hello') }}</h1>
    <h1>{{ $translate('hi.hello') }}</h1> -->
</template>

<script>
export default{
    name: 'Translation',
    setup(){
        const usersLanguage = window.navigator.language
        return{
            usersLanguage,
        }
    },
    data(){
        return{
            languages: ['en', 'gu', 'hi']
        }
    }
}
</script>