import Banner from "@/components/custom/Banner";
import LostPassword from '../pages/myaccount/LostPassword'
import banner1 from '@/assets/images/image-06.jpg'

export default function LostPasswordPage() {
    return (
        <div>
            <Banner
                backgroundImage={banner1.src}
                title="Reset Password"
                description=""
            />
            <LostPassword />
        </div>
    )
}
