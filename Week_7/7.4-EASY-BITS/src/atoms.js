import { atom, selector } from "recoil";
// import axios from 'axios';
export const networkAtom = atom({
    key:"networkAtom",
    default:102
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
});
export const messagingAtom = atom({
    key:"messagingkAtom",
    default:0
});

/* selectors */
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get:({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationkAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationkAtomCount;
    }
})


/* Asynchronous data queries */ 

// export const notifications = atom({
//     key:"notifications",
//     default: selector({
//         key:"networkAtomSelector",
//         get: async() => {
//             const res = await axios.get("https://sum-server.100x.devs.com/notifications")
//             return res.data
//         }
//     })
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get:({get}) =>{
//         const allNotification = get(notifications);
//         return allNotification.network + 
//         allNotification.job + 
//         allNotification.notifications + 
//         allNotification.messaging
//     }
// })