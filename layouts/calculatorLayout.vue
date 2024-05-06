<template>
  <div id="app">
    <div id="main">
      <Navbar/>
      <CalculatorHero/>
      <NavCalculator/>
      <section>
        <ContainerAtom>
          <RowContentCenter>
            <div class="col-12">
              <div class="card-shadow p-4">
                <slot/>
              </div>
            </div>
          </RowContentCenter>
        </ContainerAtom>
      </section>
      <Footer class="mt-5"/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>