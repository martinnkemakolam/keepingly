import style from '@/style/video.module.css'
import { SendModal } from "./sendModal";
import { DeleteModal } from "../(presentation)/deleteModal";
import { RenameModal } from "./renameModal";
import { UploadModal } from "./uploadModal";
import { KeepTrackModal } from './keepTrackModal';
export default function Overlay({overlay, select, currentPage, closeFunc, type}){
    return(
        <div className={style.overlay}>
                {overlay === 'Send' && <SendModal select={select} closeFunc={closeFunc} currentPage={currentPage}/>}
                {overlay === "Delete" && <DeleteModal currentPage={currentPage} closeFunc={closeFunc}/>}
                {overlay === 'Rename' && <RenameModal currentPage={currentPage} closeFunc={closeFunc}/>}
                {overlay === 'Upload' && <UploadModal type={type} closeFunc={closeFunc} currentPage={currentPage}/>}
                {overlay ==  'keeptrack' && <KeepTrackModal closeFunc={closeFunc} />}
        </div>
    )
}