<script setup>
import { ref, onMounted, watch } from 'vue'
import { getWeeklyStars, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const weeklyStars = ref([])
const loading = ref(true)

// 获取每周优秀之星数据
const loadWeeklyStars = async (currentGrade) => {
  loading.value = true
  try {
    weeklyStars.value = await fetchData(getWeeklyStars, currentGrade)
  } catch (error) {
    console.error('获取每周优秀之星数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadWeeklyStars(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadWeeklyStars(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow h-full">
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-star mr-2"></i>
          每周优秀之星
        </h2>
        <span class="text-sm text-purple-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4 h-[calc(100%-64px)] flex flex-col">
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="weeklyStars.length > 0" class="space-y-4 flex-grow">
        <div 
          v-for="(item, index) in weeklyStars" 
          :key="item.id"
          class="flex items-start p-3 rounded-lg border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all"
        >
          <!-- 头像 -->
          <img 
            :src="item.avatar" 
            :alt="item.name"
            class="w-14 h-14 rounded-full mr-3 border-2 border-white shadow-sm flex-shrink-0"
          />
          
          <!-- 信息 -->
          <div class="flex-grow">
            <div class="flex items-center mb-1">
              <h3 class="font-bold text-gray-800 mr-2">{{ item.name }}</h3>
              <span class="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">{{ item.grade }}{{ item.class }}</span>
            </div>
            <p class="text-sm text-gray-600 line-clamp-2">
              <i class="fas fa-award text-yellow-500 mr-1"></i>
              {{ item.reason }}
            </p>
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
}
</style>