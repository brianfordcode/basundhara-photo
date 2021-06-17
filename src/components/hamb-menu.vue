<template>
   <div
        id= "hamb-menu"
        :class="{ 'open': active }">
            <span class="burger-bar-1"></span>
            <span class="burger-bar-2"></span>
            <span class="burger-bar-3"></span>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        openshit(event) {
            console.log('shit')
            this.$emit('click', event)
        }
    }
}
</script>

<style>
#hamb-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform .5s ease-in-out;
    user-select: none;
}

#hamb-menu span:nth-child(2) {
    margin: 5px 0;
}

#hamb-menu span {
    height: 2px;
    width: 20px;
    background-color: black;
    transition: transform .2s ease-in-out, opacity .2s ease-in-out;
}

#hamb-menu.open .burger-bar-1 {
    transform: translateY(7px) rotate(-45deg) ;
}


#hamb-menu.open .burger-bar-2 {
    opacity: 0;
}

#hamb-menu.open .burger-bar-3 {
    transform: translateY(-7px) rotate(45deg);
    top: 10px;
}
</style>