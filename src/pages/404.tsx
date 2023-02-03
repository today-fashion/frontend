import { ServerError } from "@/components/Error"
import { Props404 } from "@/utils/interfaces"

export default function Error404 ({ themeColor }: Props404) {
  return (
    <ServerError title="페이지를 찾을 수 없습니다." desc="주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다." themeColor={themeColor} />
  )
}