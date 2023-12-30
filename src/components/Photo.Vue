<script setup lang="ts">
import { ref } from 'vue';

const pictures = {
  2019: require('@/assets/bruce1.jpg'),
  2020: require('@/assets/2020.jpg'),
  2021: require('@/assets/2021.jpg'),
  2022: require('@/assets/2022.jpg'),
  2023: require('@/assets/2023.jpg'),
};

const selectedPicture = ref('');

const selectPicture = (year) => {
  selectedPicture.value = pictures[year];
};
const showPicture = (year) => {
  // Show the picture in a nice mirage gallery
  console.log(`Showing picture for year ${year}`);
};
</script>
