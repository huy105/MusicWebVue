import {ref, computed} from 'vue'


export function playThisMusic(value) {
 
    console.log(value)

};

export const recommendData = ref([
    {   
        topic_title: "Recently",
        Songs: [
            {title: "daily1", artist:"Aimer"},
            {title: "daily2", artist:"EdSheeran"},
            {title: "daily3", artist:"Sam"},
            {title: "daily4", artist:"Smith"},
            {title: "daily5", artist:"Sara"},
            {title: "daily6", artist:"Sara"},
            {title: "daily7", artist:"Sara"},
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

