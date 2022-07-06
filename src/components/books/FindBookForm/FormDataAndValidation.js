export const agentsTypeArray = [
    '',
    'Annotator',
    'Author',
    'Commentator',
    'Compiler',
    'Composer',
    'Contributor',
    'Editor',
    'Illustrator',
    'Other',
    'Photographer',
    'Translator',
]

export const languagesArray = [
    '', 'zh', 'yi', 'tl', 'te', 'sv', 'sr', 'sl', 'sa', 'ru', 'ro', 'rmr', 'pt', 'pl', 'oji', 'oc', 'no', 'nl', 'nav', 'nap', 'nai', 'nah', 'myn', 'mi', 'lt', 'la', 'ko', 'kld', 'kha', 'ja', 'iu', 'it', 'is', 'ilo', 'ia', 'hu', 'he', 'grc', 'gla', 'gl', 'ga', 'fy', 'fur', 'fr', 'fi', 'fa', 'et', 'es', 'eo', 'enm', 'en', 'el', 'de', 'da', 'cy', 'csb', 'cs', 'ceb', 'ca', 'brx', 'br', 'bgs', 'bg', 'arp', 'ar', 'ang', 'ale', 'af'
].sort();

export const validationHandler = refObj => {
    let query = '';
    const enteredTitle = refObj.title.current.value;
    const enteredDescription = refObj.description.current.value;
    const enteredAgentsType = refObj.agentsType.current.value;
    const enteredAgentName = refObj.agentsName.current.value;
    const enteredAgentsBirthDateMin = refObj.agentsBirthDateMin.current.value;
    const enteredAgentsBirthDateMax = refObj.agentsBirthDateMax.current.value;
    const enteredAgentsDeathDateMin = refObj.agentsDeathDateMin.current.value;
    const enteredAgentsDeathDateMax = refObj.agentsDeathDateMax.current.value;
    const enteredDownloadRangeMin = refObj.downloadRangeMin.current.value;
    const enteredDownloadRangeMax = refObj.downloadRangeMax.current.value;
    const enteredLanguage = refObj.language.current.value;

    if (enteredTitle) {
        query += `title_contains=${enteredTitle}&`;
    }
    if (enteredDescription) {
        query += `description_contains=${enteredDescription}&`;
    }
    if (enteredAgentsType) {
        query += `has_agent_type=${enteredAgentsType}&`;
    }
    if (enteredAgentName) {
        query += `agent_name_contains=${enteredAgentName}&`;
    }
    if (enteredAgentsBirthDateMin) {
        query += `agent_birth_date_range_min=${enteredAgentsBirthDateMin}&`;
    }
    if (enteredAgentsBirthDateMax) {
        query += `agent_birth_date_range_max=${enteredAgentsBirthDateMax}&`;
    }
    if (enteredAgentsDeathDateMin) {
        query += `agent_death_date_range_min=${enteredAgentsDeathDateMin}&`;
    }
    if (enteredAgentsDeathDateMax) {
        query += `agent_death_date_range_max=${enteredAgentsDeathDateMax}&`;
    }
    if (enteredDownloadRangeMin) {
        query += `downloads_range_min=${enteredDownloadRangeMin}&`;
    }
    if (enteredDownloadRangeMax) {
        query += `downloads_range_max=${enteredDownloadRangeMax}&`;
    }
    if (enteredLanguage) {
        query += `languages=${enteredLanguage}&`;
    }

    return query;
}