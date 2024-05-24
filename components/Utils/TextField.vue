<template>
    <div class="relative">
        <label for="" class="block text-sm font-medium text-gray-600">{{ placeholder }}</label>
        <div class="relative mt-2">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            </div>

            <input @change="UpdateValue" type="text" name="" id="" placeholder="" v-model="textValue"
                class="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
        </div>
        </div>F
</template>

<script>
export default {
    data: () => ({
        textValue: ''
    }),
    props: ['placeholder', 'getValue'],
    methods: {
        UpdateValue() {
            this.getValue(this.textValue)
        }
    },
}
</script>

<style></style>