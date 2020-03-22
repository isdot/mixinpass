<template>
  <div class="home">
    <Topbar />
    <div class="container">
      <div class="columns">
        <div class="column main col-8 col-lg-10 col-sm-12">
          <div class="card">
            <div class="card-body">
              <Generate />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <PasswordList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
