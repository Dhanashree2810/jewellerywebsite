import Banner from "@/components/custom/Banner";
import MyAccount from "../pages/myaccount/MyAccount";
import banner1 from '@/assets/images/image-06.jpg'


export default function MyAccountPage() {
  return (
    <div>
      <Banner
        backgroundImage={banner1.src}
        title="My Account"
        description=""
      />
      <MyAccount />
    </div>
  )
}
