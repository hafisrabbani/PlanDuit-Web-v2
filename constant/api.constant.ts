const CALCULATOR: String = 'calculator';
const INFO: String = 'info';
const BLOG: String  = 'blog';
const DICTIONARY: String = "dictionary";
const APICONSTANTV1: Object = {
    CALCULATOR_INVESTMENT: `${CALCULATOR}/investment`,
    CALCULATOR_BUDGETING: `${CALCULATOR}/budgeting-503020`,
    CALCULATOR_RISK_PROFILE: `${CALCULATOR}/profile-resiko`,
    CALCULATOR_ZAKAT_PENGHASILAN: `${CALCULATOR}/zakat-penghasilan`,
    CALCULATOR_ZAKAT_EMAS: `${CALCULATOR}/zakat-emas`,
    CALCULATOR_ZAKAT_TABUNGAN: `${CALCULATOR}/zakat-tabungan`,
    CALCULATOR_ZAKAT_PERDAGANGAN: `${CALCULATOR}/zakat-perdagangan`,
    CALCULATOR_ZAKAT_PERTANIAN: `${CALCULATOR}/zakat-pertanian`,
    INFO_GOLD_PRICE: `${INFO}/gold-price`,
    INFO_GRAIN_PRICE: `${INFO}/grain-price`,
    BLOG,
    BLOG_DETAIL: `${BLOG}/:id`,
    DICTIONARY,
    DICTIONARY_DETAIL: `${DICTIONARY}/:id`,
}
export default APICONSTANTV1;