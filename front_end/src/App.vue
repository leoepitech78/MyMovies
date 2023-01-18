<template>
  <div class="background"></div>
  <router-view id="content" />
</template>

<style>
#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}

.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgb(250, 250, 250);
}

.navbar {
  background: #fafafa;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
}

.nav {
  width: 80%;
  min-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fafafa;
}

#name_project {
  font-weight: 700;
}

.container {
  width: 400px;
  max-width: 95%;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input > label {
  text-align: start;
}

.input > input {
  margin-top: 6px;
  height: 38px !important;
}

.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: cadetblue;
  border: none;
  border-radius: 45px;
  outline: none;
  transform: translateX(-50%);
}

.btn-pers:active {
  transform: translate(-50%, -1px);
}

/*  */

.alternative-option {
  text-align: center;
}

.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}

#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
