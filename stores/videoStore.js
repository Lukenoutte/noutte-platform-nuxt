import { defineStore } from 'pinia'
import { trendingList } from '../utils'

export const useVideoStore = defineStore('video',
    {
        state: () => ({
            favoritedList: [],
            trendingList
        }),
        getters: {
            isFavorited: (state) => (idVideo) => state.favoritedList.some(item => item.id === idVideo)
        },
        actions: {
            handleFavorited(newVideo) {
                const videoAlreadyFavorited = this.favoritedList.some(item => item.id === newVideo.id)
                this.favoritedList = videoAlreadyFavorited
                    ? this.favoritedList.filter(item => item.id !== newVideo.id)
                    : [...this.favoritedList, newVideo]
            },
        }
    }
)