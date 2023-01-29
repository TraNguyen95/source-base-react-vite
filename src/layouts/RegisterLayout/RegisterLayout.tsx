import RegisterFooter from 'src/components/RegisterFooter'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout(props: Props) {
  return (
    <div>
      <RegisterHeader />
      {props.children}
      <RegisterFooter />
    </div>
  )
}
