import './index.css'

const LanguageFilterItem = props => {
  const {headerList, isActive, onChangeActiveTabId} = props
  const {language, id} = headerList
  const headerActive = isActive ? 'color item' : 'item'

  const changeTab = () => {
    onChangeActiveTabId(id)
  }

  return (
    <li>
      <button type="button" className={headerActive} onClick={changeTab}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
