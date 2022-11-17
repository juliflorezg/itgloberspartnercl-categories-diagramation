import React, {PropsWithChildren} from 'react'
import { BulletsSchema } from './BulletsTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext } from 'vtex.list-context'
import { getBulletAsTSXList } from './modules/bulletsAsList'


export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const {isMobile} = useDevice()
  const {list} = useListContext() || [] 
  console.log({bullets})
  console.log({list})

  const bulletsContent = getBulletAsTSXList(bullets)

  if(false){
    console.log(children);
  }
  return isMobile ? <div>Mobile</div> : <div>{bulletsContent}</div>
}

export default BulletGroup