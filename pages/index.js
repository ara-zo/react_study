import {useRouter} from "next/router";

export default function Home() {

  const router = useRouter()

  return (
    <div onClick={e => router.push("/info")}>안녕하세요</div>
  )
}