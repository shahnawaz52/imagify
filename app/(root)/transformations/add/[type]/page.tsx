import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps ) => {
  const { userId, redirectToSignIn } = await auth()
  const transforamtion = transformationTypes[type]

  if(!userId) return redirectToSignIn();

  const user = await getUserById(userId);
  return (
    <>
      <Header title={transforamtion.title} subtitle={transforamtion.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transforamtion.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage