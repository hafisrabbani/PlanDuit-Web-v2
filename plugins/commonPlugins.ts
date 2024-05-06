export default defineNuxtPlugin(() => {
    const RupiahFormatter = (value: number | string) : string => {
        const temp = value.toString().replace(/\./g, '');
        return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const RupiahToNumber = (value: string) : number => {
        return parseInt(value.replace(/[^0-9]/g, ''));
    }

    const CleanDigit = (value: string) : string => {
        return value.replace(/[^0-9]/g, '');
    }

    return {
        provide: {
            RupiahFormatter,
            RupiahToNumber,
            CleanDigit
        }
    }
});