import { StyledLink } from '~/src/components/elements/Link'
import { ProfileForm } from '~/src/features/auth/components/form/Profile'

export default function UserProfilePage() {
  return (
    <div className='flex flex-col items-center'>
      <ProfileForm />
      <div className='pt-4'>
        <StyledLink href='/'>←Home</StyledLink>
      </div>
    </div>
  )
}
