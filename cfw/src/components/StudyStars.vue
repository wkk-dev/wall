<script setup>
import { ref, onMounted, watch } from 'vue'
import { getStudyStars, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const studyStars = ref([])
const loading = ref(true)

// 获取学习之星数据
const loadStudyStars = async (currentGrade) => {
  loading.value = true
  try {
    studyStars.value = await fetchData(getStudyStars, currentGrade)
  } catch (error) {
    console.error('获取学习之星数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadStudyStars(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadStudyStars(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow h-full">
    <div class="bg-gradient-to-r from-green-600 to-teal-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-book mr-2"></i>
          学习之星
        </h2>
        <span class="text-sm text-green-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4 h-[calc(100%-64px)] flex flex-col">
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="studyStars.length > 0" class="space-y-4 flex-grow">
        <div 
          v-for="(item, index) in studyStars" 
          :key="item.id"
          class="flex items-center p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all"
        >
          <!-- 头像 -->
          <img 
            :src="item.avatar" 
            :alt="item.name"
            class="w-14 h-14 rounded-full mr-3 border-2 border-white shadow-sm flex-shrink-0"
          />
          
          <!-- 信息 -->
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
              <span class="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">{{ item.grade }}{{ item.class }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">
                <i class="fas fa-book-open text-green-500 mr-1"></i>
                {{ item.subject }}
              </span>
              <span class="text-lg font-bold text-green-600">{{ item.score }}分</span>
            </div>
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