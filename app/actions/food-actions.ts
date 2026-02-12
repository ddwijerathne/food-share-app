'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function shareFood(formData: FormData) {
  const supabase = await createClient()

  // Extract form fields
  const heading = formData.get('heading') as string
  const subheading = formData.get('subheading') as string
  const price = formData.get('price') as string
  const imageFile = formData.get('image') as File

  if (!imageFile || imageFile.size === 0) {
    throw new Error("Image is required")
  }

  // 1. Upload to Supabase Storage
  const fileName = `${Date.now()}-${imageFile.name}`
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('food-images')
    .upload(fileName, imageFile)

  if (uploadError) throw new Error(uploadError.message)

  // 2. Get the Public URL
  const { data: { publicUrl } } = supabase.storage
    .from('food-images')
    .getPublicUrl(fileName)

  // 3. Insert into Database
  const { error: dbError } = await supabase
    .from('food_items')
    .insert([
      {
        heading,
        subheading,
        price: parseFloat(price),
        image_url: publicUrl,
      },
    ])

  if (dbError) throw new Error(dbError.message)

  // 4. Update UI and Redirect
  revalidatePath('/')
  redirect('/')
}