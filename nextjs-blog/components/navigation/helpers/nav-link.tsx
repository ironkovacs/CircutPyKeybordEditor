import Link from 'next/link'
import { useTranslation } from 'react-i18next'

function NavLink(props) {
  const { t } = useTranslation(['translation', 'hu']);
  const _title = "general.title";
  
  return <>
    <Link href={props.target}> 
      <a>{t(_title)}</a>
    </Link>
  </>;
}

export default NavLink;