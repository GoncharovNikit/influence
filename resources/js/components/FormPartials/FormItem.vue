<template>
    <div class="form-item">
        <label class="form-label" :for="property">{{ propertyTitle }}</label>
        <custom-input
            :type="property.includes('password') ? 'password' : 'text'"
            :id="property"
            :value="v$[property].$model"
            @input="$emit('update', $event.target.value), v$[property].$touch()"
            :placeholder="propertyTitle"
            class="form-input"
        />
        <errors class="input-errors" :errors="v$[property].$errors" />
    </div>
</template>
<script>
import Errors from "./Errors";
export default {
    name: "form-item",
    components: {
        Errors,
    },
    props: {
        property: {
            type: String,
            required: true,
        },
        v$: {
            required: true,
        },
    },
    computed: {
        propertyTitle() {
            return (
                this.property.charAt(0).toUpperCase() + this.property.slice(1)
            ).replace("_", " ");
        },
    },
};
</script>
<style scoped>
.form-item {
    padding: 10px 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
}
.input-errors {
    grid-column-start: 1;
    grid-column-end: 3;
}
</style>
