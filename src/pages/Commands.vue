<template>
<article>
    <div class="header-page">
    <a href="">Manage commands</a>
    <a href="">Manage users</a>
    </div>
    <div id="commands-box">
        <ul class="container">
            <li>
                <a href="">2 servers</a>
            </li>
            <li>
                <a href="">2 servers</a>
            </li>
            <li>
                <a href="">2 servers</a>
            </li>
            <li>
                <a href="">2 servers</a>
            </li>
            <li>
                <a href="">2 servers</a>
            </li>
            <li>
                <a href="">2 servers</a>
            </li>
        </ul>
    </div>

</article>
</template>
<script>


export default({
    
})
</script>
<style scoped>
a{  width:10%;
    margin-left: 72px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15.83px;
    display: block;
    padding-bottom: 12px;
    cursor: pointer;
}
a:hover{
    text-decoration: underline;
}
#commands-box{
    background: var(--general-blue);
}
#commands-box ul{
    padding: 2em 0;
}
#commands-box ul li a{
    color: var(--color-text-box);
    font-weight: bold;
    font-size: 13px;
}
</style>