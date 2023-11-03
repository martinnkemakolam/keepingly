import style from '@/style/video.module.css'
export let DragAndDrop=({type, addToUpload})=>{
    let allowed
    if (type === "document") {
        allowed = ['pdf', 'doc', 'docs']
    }
    return(
        <label htmlFor='file' className={style.modalUpload} onDragOver={(e)=> e.preventDefault()} onDrop={(ev)=>{
            ev.preventDefault()
            let arr = Array.from(ev.dataTransfer.items)
            let noReturn
             let files = arr.map(element => {
                let file = element.getAsFile()
                return file
                let returnVal
                allowed.forEach((ele)=>{
                    if (file.name.includes(ele)) {
                        returnVal = file
                    }
                })
                if (returnVal) {
                    console.log('reach')
                    return returnVal   
                }else{
                    noReturn = true
                }
            });
            if (noReturn) {
                alert('A file with a non supported format was added')
                return
            }
            addToUpload(files)
        }}>
            <div className={style.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill="#A61D4A"/>
                    <path d="M5 3V2.5C4.72386 2.5 4.5 2.72386 4.5 3H5ZM19 21V21.5C19.2761 21.5 19.5 21.2761 19.5 21H19ZM5 21H4.5C4.5 21.2761 4.72386 21.5 5 21.5V21ZM14 3L14.3536 2.64645C14.2598 2.55268 14.1326 2.5 14 2.5V3ZM19 8H19.5C19.5 7.86739 19.4473 7.74021 19.3536 7.64645L19 8ZM12.5 11C12.5 10.7239 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.7239 11.5 11H12.5ZM11.5 17C11.5 17.2761 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.2761 12.5 17H11.5ZM9 13.5C8.72386 13.5 8.5 13.7239 8.5 14C8.5 14.2761 8.72386 14.5 9 14.5V13.5ZM15 14.5C15.2761 14.5 15.5 14.2761 15.5 14C15.5 13.7239 15.2761 13.5 15 13.5V14.5ZM19 20.5H5V21.5H19V20.5ZM5.5 21V3H4.5V21H5.5ZM5 3.5H14V2.5H5V3.5ZM18.5 8V21H19.5V8H18.5ZM13.6464 3.35355L18.6464 8.35355L19.3536 7.64645L14.3536 2.64645L13.6464 3.35355ZM12.5 3V7H13.5V3H12.5ZM15 9.5H19V8.5H15V9.5ZM12.5 7C12.5 8.38071 13.6193 9.5 15 9.5V8.5C14.1716 8.5 13.5 7.82843 13.5 7H12.5ZM11.5 11V17H12.5V11H11.5ZM9 14.5H15V13.5H9V14.5Z" fill="#A61D4A"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9C19.2091 9 21 10.7909 21 13C21 14.4806 20.1956 15.7733 19 16.4649M7 9C4.79086 9 3 10.7909 3 13C3 14.4806 3.8044 15.7733 5 16.4649M7 9C7.43285 9 7.84965 9.06875 8.24006 9.19594M12 11V21M12 11L16 15M12 11L8 15" stroke="#A61D4A" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill="#A61D4A"/>
                    <path d="M5 3V2.5C4.72386 2.5 4.5 2.72386 4.5 3H5ZM19 21V21.5C19.2761 21.5 19.5 21.2761 19.5 21H19ZM5 21H4.5C4.5 21.2761 4.72386 21.5 5 21.5V21ZM14 3L14.3536 2.64645C14.2598 2.55268 14.1326 2.5 14 2.5V3ZM19 8H19.5C19.5 7.86739 19.4473 7.74021 19.3536 7.64645L19 8ZM8 16.5C7.72386 16.5 7.5 16.7239 7.5 17C7.5 17.2761 7.72386 17.5 8 17.5V16.5ZM16 17.5C16.2761 17.5 16.5 17.2761 16.5 17C16.5 16.7239 16.2761 16.5 16 16.5V17.5ZM8 12.5C7.72386 12.5 7.5 12.7239 7.5 13C7.5 13.2761 7.72386 13.5 8 13.5V12.5ZM14 13.5C14.2761 13.5 14.5 13.2761 14.5 13C14.5 12.7239 14.2761 12.5 14 12.5V13.5ZM19 20.5H5V21.5H19V20.5ZM5.5 21V3H4.5V21H5.5ZM5 3.5H14V2.5H5V3.5ZM18.5 8V21H19.5V8H18.5ZM13.6464 3.35355L18.6464 8.35355L19.3536 7.64645L14.3536 2.64645L13.6464 3.35355ZM12.5 3V7H13.5V3H12.5ZM15 9.5H19V8.5H15V9.5ZM12.5 7C12.5 8.38071 13.6193 9.5 15 9.5V8.5C14.1716 8.5 13.5 7.82843 13.5 7H12.5ZM8 17.5H16V16.5H8V17.5ZM8 13.5H14V12.5H8V13.5Z" fill="#A61D4A"/>
                </svg>
            </div>
            <div className={style.modalUploadText}>
                <p className={style.modalUploadText1}>Drag here or click to upload {type}</p>
                <p className={style.modalUploadText2}>Maximum file size is 2MB.<br/>File must be in { type === 'document' && 'DOC, DOCX or PDF'}{ type === 'video' && 'MP4, MKV, or WEBM'}{ type === 'photo' && 'JPG, PNG, or WEBP'} formats.</p>
            </div>
            <input style={{display: "none"}} type="file" id='file' />
        </label>
    )
}