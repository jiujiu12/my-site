<template style="height: 100%; background-color: #c1bdba;">
  <div id="login">

<!--    <nav class="login-nav">-->
<!--      <a class="logo">FUR</a>-->
<!--      <router-link :to="{ name: 'home'}">主页</router-link>-->
<!--      <a href=" http://aaamiao.xyz/about/">博客</a>-->
<!--      <router-link :to="{ name : 'resume' }">在线简历</router-link>-->
<!--    </nav>-->
    <nav class="login-nav">
      <div class="nav-left">
        <a  class="logo">FUR</a>
      </div>
    </nav>

    <div class="form">

      <div class="tab-content">
       <!-- <div id="signup">
          <h1>Sign Up for Free</h1>

          <form action="/" method="post">

            <div class="top-row">
              <div class="field-wrap">
                <label>
                  First Name<span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>

              <div class="field-wrap">
                <label>
                  Last Name<span class="req">*</span>
                </label>
                <input type="text"required autocomplete="off"/>
              </div>
            </div>

            <div class="field-wrap">
              <label>
                Email Address<span class="req">*</span>
              </label>
              <input type="email"required autocomplete="off"/>
            </div>

            <div class="field-wrap">
              <label>
                Set A Password<span class="req">*</span>
              </label>
              <input type="password"required autocomplete="off"/>
            </div>

            <button type="submit" class="button button-block">Get Started</button>

          </form>

        </div>-->

        <div id="login signup">
          <h1>Welcome!</h1>

          <form action="/" method="post">

            <div class="field-wrap">
              <label>
                Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>

            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <input type="password"required autocomplete="off"/>
            </div>

            <p class="forgot"><a href="#">Forgot Password?</a></p>

            <button class="button button-block">Log In </button>

          </form>

        </div>

      </div><!-- tab-content -->

    </div> <!-- /form -->

    <my-footer></my-footer>

  </div>
</template>

<script>
  import MyFooter from './common/MyFooter';
    export default {
        name: 'login',
      components: {MyFooter}
    };
</script>

<style lang="less" scoped>
@import "../common/style/less/login";
.login-nav{
  background-color:  #be3144;
  border-radius: 0;
  height: 6rem;
  padding: 1.9rem;
  a{
    color: white;
    float: left;
  }
}
  input{
    outline: none;
  }
</style>
<style>
  #app, #login {
    height: 100%;
  }
</style>
