<script setup lang="ts">
/* eslint perfectionist/sort-vue-attributes: off */
import type { CSSProperties } from 'vue'

import { theme as antdTheme } from 'ant-design-vue'

const { darkTheme, darkThemeIconName, toggleTheme } = useDarkTheme()

const theme = reactive({
  algorithm: antdTheme.defaultAlgorithm,
})
const value = ref('horizontal')
const baseStyle: CSSProperties = {
  height: '54px',
  width: '25%',
}
const color = reactive({
  bg: '#fff',
  color: '#000',
})

watch(() => darkTheme.value, (mode: SystemThemeType) => changeTheme(mode))

function changeTheme(type: 'dark' | 'light') {
  if (type === 'dark') {
    theme.algorithm = antdTheme.darkAlgorithm
    color.bg = '#000'
    color.color = '#fff'
  }
  else {
    theme.algorithm = antdTheme.defaultAlgorithm
    color.bg = '#fff'
    color.color = '#000'
  }
}

onMounted(() => {
  changeTheme(darkTheme.value)
})

const tableProps = reactive({
  columns: [
    {
      dataIndex: 'name',
      key: 'name',
      title: 'Name',
    },
    {
      dataIndex: 'age',
      key: 'age',
      title: 'Age',
    },
    {
      dataIndex: 'address',
      key: 'address',
      title: 'Address',
    },
  ],
  dataSource: [
    {
      address: '10 Downing Street',
      age: 32,
      key: '1',
      name: 'Mike',
    },
    {
      address: '10 Downing Street',
      age: 42,
      key: '2',
      name: 'John',
    },
  ],
})

type StatusType = 'info' | 'success'

function handleMessage(type: StatusType) {
  if (type === 'success')
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)
  else if (type === 'info')
    message.info('This is a prompt message for info, and it will disappear in 10 seconds', 10)
}

function handleModal(type: StatusType) {
  if (type === 'success') {
    Modal.success({
      content: 'some messages...some messages...',
      title: 'This is a success message',
    })
  }
  else if (type === 'info') {
    Modal.info({
      content: 'some messages...some messages...',
      title: 'This is a info message',
    })
  }
}

function handleNotification(type: StatusType) {
  if (type === 'success') {
    notification.success({
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      message: 'Notification Title',
    })
  }
  else if (type === 'info') {
    notification.info({
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      message: 'Notification Title',
    })
  }
}
</script>

<template>
  <div>
    <a-extract-style>
      <a-config-provider :theme="theme">
        <div
          :style="{
            backgroundColor: color.bg,
            color: color.color,
          }" class="box-border flex h-screen w-screen flex-col gap-2 overflow-x-hidden p-2"
        >
          <div>
            <a-space>
              <a-button @click="toggleTheme">
                <template #icon>
                  <Icon :name="darkThemeIconName" />
                </template>
              </a-button>
            </a-space>
          </div>
          <a-alert message="Success Text" type="success" />
          <div>
            icon:
            <AlertFilled />
            <LoadingOutlined />
          </div>
          <a-table v-bind="tableProps" />
          <a-space>
            <a-button type="primary" @click="handleMessage('success')">
              message success
            </a-button>
            <a-button @click="handleMessage('info')">
              message info
            </a-button>
          </a-space>
          <a-space>
            <a-button type="primary" @click="handleModal('success')">
              modal success
            </a-button>
            <a-button @click="handleModal('info')">
              modal info
            </a-button>
          </a-space>
          <a-space>
            <a-button type="primary" @click="handleNotification('success')">
              notification success
            </a-button>
            <a-button @click="handleNotification('info')">
              notification info
            </a-button>
          </a-space>
          <a-flex gap="middle" vertical>
            <a-radio-group v-model:value="value">
              <a-radio value="horizontal">
                horizontal
              </a-radio>
              <a-radio value="vertical">
                vertical
              </a-radio>
            </a-radio-group>
            <a-flex :vertical="value === 'vertical'">
              <div
                v-for="(item, index) in new Array(4)" :key="item"
                :style="{ ...baseStyle, background: `${index % 2 ? '#1677ff' : '#1677ffbf'}` }"
              />
            </a-flex>
          </a-flex>
        </div>
      </a-config-provider>
    </a-extract-style>
  </div>
</template>
