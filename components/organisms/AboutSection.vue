<template>
  <section id="about"  class="bg-primary hiro-section">
    <ContainerAtom id="about-section">
      <RowGlass row-class="p-5">
        <div class="col-md-6 wow fadeInUp">
          <AboutContent :title="title" :text="text"/>
        </div>
        <div class="col-md-6 wow fadeInUp">
          <AboutContent :text="text2">
            <img src="/images/apps_icon.svg" class="w-100 mb-5" alt="Mockup">
          </AboutContent>
        </div>
      </RowGlass>
    </ContainerAtom>
  </section>
</template>

<script setup lang="ts">
const title:String = "Tentang PlanDuit";
const text:String = "PlanDuit adalah aplikasi yang membantu anda merencanakan investasi dan menghitung keuangan serta zakat dengan mudah. Aplikasi ini sangat cocok bagi anda yang ingin mengatur keuangan dengan baik.";
const text2:String = "Download PlanDuit sekarang dan mulai merencanakan investasi dan menghitung keuangan serta zakat dengan mudah.";
</script>