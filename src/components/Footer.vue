<script setup lang="ts">
</script>


<template>
<footer>
<p>© 2022 | Sabina Andersson</p>
<a href="https://github.com/sabinaander/express-lab" target="_blank"  > &gt; Github repo &lt; </a>
</footer>
</template>

<style lang="less">
footer {
    bottom: 0;
    background-color: transparent;
    text-align: center;
    color: white;
    p{
    font-family: "Dancing Script", cursive;
    font-size: clamp(1rem, 4vw, 1.5rem);
    letter-spacing: 0.5rem;
    margin-bottom: 0;
    }
    a{
        text-decoration: none;
        font-weight: 600;
        font-size: clamp(1rem, 4vw, 1.5rem);
        color: white;

        &:hover{
            color:rgb(212, 78, 205);
        }
    }
}
</style>