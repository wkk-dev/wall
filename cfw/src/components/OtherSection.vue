<script setup>
import { ref, onMounted, watch } from 'vue'
import { getOtherSection, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const otherSection = ref([])
const loading = ref(true)

// 获取其他区域数据
const loadOtherSection = async (currentGrade) => {
  loading.value = true
  try {
    otherSection.value = await fetchData(getOtherSection, currentGrade)
  } catch (error) {
    console.error('获取其他区域数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadOtherSection(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadOtherSection(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow h-full">
    <div class="bg-gradient-to-r from-violet-600 to-indigo-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-medal mr-2"></i>
          其他荣誉
        </h2>
        <span class="text-sm text-violet-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4 h-[calc(100%-64px)] flex flex-col">
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="otherSection.length > 0" class="space-y-4 flex-grow">
        <div 
          v-for="(item, index) in otherSection" 
          :key="item.id"
          class="p-3 rounded-lg border border-gray-100 hover:border-violet-200 hover:bg-violet-50 transition-all"
        >
          <!-- 信息 -->
          <div class="mb-2">
            <h3 class="font-bold text-gray-800 text-lg flex items-center">
              <i class="fas fa-award text-yellow-500 mr-2"></i>
              {{ item.title }}
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 mb-2">
            <span class="text-xs bg-violet-100 text-violet-800 py-1 px-2 rounded-full">
              <i class="fas fa-user text-violet-500 mr-1"></i>
              {{ item.recipient }}
            </span>
            <span class="text-xs bg-violet-100 text-violet-800 py-1 px-2 rounded-full">
              <i class="fas fa-calendar-alt text-violet-500 mr-1"></i>
              {{ item.date }}
            </span>
            <span class="text-xs bg-violet-100 text-violet-800 py-1 px-2 rounded-full">
              <i class="fas fa-graduation-cap text-violet-500 mr-1"></i>
              {{ item.grade }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- 无数据状态 -->
      <div v-else class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-info-circle text-xl mr-2"></i>暂无数据
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .h-[calc(100%-64px)] {
    height: auto;
  }
  
  .flex-wrap {
    flex-direction: column;
  }
}
</style>