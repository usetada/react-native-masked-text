import BaseMask from './_base.mask'

const MONEY_MASK_SETTINGS = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    suffixUnit: '',
    zeroCents: false
}

export default class MoneyMask extends BaseMask {
    static getType() {
        return 'money'
    }

    getValue(value, settings, oldValue) {
        let mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings)

        let sanitized = this._sanitize(value, mergedSettings, oldValue)

        if (sanitized === settings.delimiter || sanitized === settings.separator) {
            return '0';
        }

        let masked = this.getVMasker().toMoney(sanitized, mergedSettings)

        return masked
    }

    getRawValue(maskedValue, settings) {
        let mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings);

        if (mergedSettings.delimiter) {
            let clearDelimiter = new RegExp(`\\${mergedSettings.delimiter}`, 'g');
            maskedValue = maskedValue.replace(clearDelimiter, '');
        }
        if (mergedSettings.separator) {
            let cleanSeparator = new RegExp(`\\${mergedSettings.separator}`, 'g');
            maskedValue = maskedValue.replace(cleanSeparator, '.');
        }
        return Number(maskedValue)
    }

    validate(value, settings) {
        return true
    }

    _sanitize(value, settings, oldValue) {
        let sanitized = value;
        if (settings.suffixUnit && oldValue && sanitized) {
            if (sanitized.length == oldValue.length - 1) {
                let cleared = this.removeNotNumbers(sanitized)
                sanitized = cleared.substr(0, cleared.length - 1)
            }
        }

        return sanitized.toString()
    }

    _insert(text, index, string) {
        if (index > 0) {
            return (
                text.substring(0, index) +
                string +
                text.substring(index, text.length)
            )
        } else {
            return string + text
        }
    }
}
