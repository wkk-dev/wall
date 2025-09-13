<script setup>
import { ref, onMounted } from 'vue'
import { getRankings } from '../../utils/mockData.js'

// 排行榜数据
const rankings = ref([])
const newRecord = ref({
  name: '',
  grade: '高一',
  class: '1班',
  score: ''
})
const editingRecord = ref(null)
const showAddModal = ref(false)

// 加载排行榜数据
const loadRankings = () => {
  // 在实际应用中，这里应该从API获取数据
  rankings.value = getRankings('all') // 获取所有年级的数据以便管理
}

// 添加新记录
const addRecord = () => {
  // 基本验证
  if (!newRecord.value.name || !newRecord.value.score) {
    alert('请填写完整信息')
    return
  }
  
  // 在实际应用中，这里应该调用API添加数据
  const newId = Math.max(...rankings.value.map(r => r.id), 0) + 1
  rankings.value.push({
    id: newId,
    ...newRecord.value,
    avatar: `https://picsum.photos/id/${newId + 20}/64/64`
  })
  
  // 重置表单
  resetNewRecord()
  showAddModal.value = false
  
  // 按积分排序
  rankings.value.sort((a, b) => b.score - a.score)
}

// 编辑记录
const editRecord = (record) => {
  editingRecord.value = { ...record }
}

// 保存编辑
const saveEdit = () => {
  // 基本验证
  if (!editingRecord.value.name || !editingRecord.value.score) {
    alert('请填写完整信息')
    return
  }
  
  // 在实际应用中，这里应该调用API更新数据
  const index = rankings.value.findIndex(r => r.id === editingRecord.value.id)
  if (index !== -1) {
    rankings.value[index] = { ...editingRecord.value }
  }
  
  // 重置编辑状态
  editingRecord.value = null
  
  // 按积分排序
  rankings.value.sort((a, b) => b.score - a.score)
}

// 删除记录
const deleteRecord = (id) => {
  if (confirm('确定要删除这条记录吗？')) {
    // 在实际应用中，这里应该调用API删除数据
    rankings.value = rankings.value.filter(r => r.id !== id)
  }
}

// 重置新记录表单
const resetNewRecord = () => {
  newRecord.value = {
    name: '',
    grade: '高一',
    class: '1班',
    score: ''
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadRankings()
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-gray-800">积分排行榜管理</h2>
      <button 
        class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors hover:bg-blue-700"
        @click="showAddModal = true"
      >
        <i class="fas fa-plus mr-2"></i>
        添加记录
      </button>
    </div>
    
    <!-- 数据表格 -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="bg-gray-100 text-gray-600 text-sm leading-normal">
            <th class="py-3 px-4 text-left">ID</th>
            <th class="py-3 px-4 text-left">姓名</th>
            <th class="py-3 px-4 text-left">年级</th>
            <th class="py-3 px-4 text-left">班级</th>
            <th class="py-3 px-4 text-left">积分</th>
            <th class="py-3 px-4 text-center">操作</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm">
          <tr 
            v-for="record in rankings" 
            :key="record.id"
            class="border-b border-gray-200 hover:bg-gray-50"
          >
            <td class="py-3 px-4">{{ record.id }}</td>
            <td class="py-3 px-4">{{ record.name }}</td>
            <td class="py-3 px-4">{{ record.grade }}</td>
            <td class="py-3 px-4">{{ record.class }}</td>
            <td class="py-3 px-4">{{ record.score }}</td>
            <td class="py-3 px-4 text-center">
              <button 
                class="text-blue-600 hover:text-blue-800 mr-3"
                @click="editRecord(record)"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button 
                class="text-red-600 hover:text-red-800"
                @click="deleteRecord(record.id)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- 空数据状态 -->
    <div v-if="rankings.length === 0" class="py-10 text-center text-gray-500">
      <i class="fas fa-info-circle text-xl mr-2"></i>暂无数据
    </div>
    
    <!-- 添加记录弹窗 -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-bold text-gray-800">添加积分记录</h3>
          <button 
            class="text-gray-500 hover:text-gray-700"
            @click="showAddModal = false; resetNewRecord()"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input 
              v-model="newRecord.name"
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入姓名"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">年级</label>
            <select 
              v-model="newRecord.grade"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="高一">高一</option>
              <option value="高二">高二</option>
              <option value="高三">高三</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">班级</label>
            <input 
              v-model="newRecord.class"
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入班级"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">积分</label>
            <input 
              v-model="newRecord.score"
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入积分"
            />
          </div>
        </div>
        
        <div class="flex justify-end space-x-3 mt-6">
          <button 
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            @click="showAddModal = false; resetNewRecord()"
          >
            取消
          </button>
          <button 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            @click="addRecord"
          >
            确定
          </button>
        </div>
      </div>
    </div>
    
    <!-- 编辑记录弹窗 -->
    <div v-if="editingRecord" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-bold text-gray-800">编辑积分记录</h3>
          <button 
            class="text-gray-500 hover:text-gray-700"
            @click="editingRecord = null"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input 
              v-model="editingRecord.name"
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入姓名"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">年级</label>
            <select 
              v-model="editingRecord.grade"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="高一">高一</option>
              <option value="高二">高二</option>
              <option value="高三">高三</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">班级</label>
            <input 
              v-model="editingRecord.class"
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入班级"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">积分</label>
            <input 
              v-model="editingRecord.score"
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入积分"
            />
          </div>
        </div>
        
        <div class="flex justify-end space-x-3 mt-6">
          <button 
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            @click="editingRecord = null"
          >
            取消
          </button>
          <button 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            @click="saveEdit"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
  }
  
  .max-w-md {
    max-width: 90%;
  }
}
</style>