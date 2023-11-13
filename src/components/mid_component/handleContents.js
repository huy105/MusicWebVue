import {ref, computed} from 'vue'

export const data = ref([
    {   
        topic_title: "Recently",
        Songs: [
            {title: "daily1", artist:"Aimer"},
            {title: "daily2", artist:"EdSheeran"},
            {title: "daily3", artist:"Sam"},
            {title: "daily4", artist:"Smith"},
        ]
    },
    {
        topic_title: "Emotion",
        Songs: [
            {title: "Piano", artist:"Aimer"},
            {title: "Feel", artist:"Yuta"},
            {title: "21y", artist:"Gracie"},
            {title: "Maybe", artist:"Kim"},
        ]
    },
    {   
        topic_title: "Chill",
        Songs: [
            {title: "Piano", artist:"Aimer"},
            {title: "Acoustis", artist:"Aimer"},
            {title: "Summer", artist:"Gibli"},
            {title: "Someday", artist:"Kygo"},
        ]
    },
])