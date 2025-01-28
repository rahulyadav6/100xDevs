import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'; 
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms';
function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  );
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessageAtomCount] = useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My network {networkNotificationCount >= 100 ? "99+": networkNotificationCount} </button>
      <button>Jobs {jobsAtomCount >= 100? "99+":jobsAtomCount} </button>
      <button>Messaging {messagingAtomCount >= 100? "99+": messagingAtomCount}</button>
      <button>Notification {notificationAtomCount >= 100? "99+": notificationAtomCount} </button>
      <button onClick={()=>{
        setMessageAtomCount(c=>c+1); 
      }} >Me{totalNotificationCount}</button>
    </>
  )
}

export default App
