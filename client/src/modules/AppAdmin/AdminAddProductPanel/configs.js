import * as Yup from 'yup'

export const types = Object.freeze({
  MOBILE: 'mobile',
  TABLETS: 'tablets',
  NOTEBOOKS: 'notebooks',
  TV: 'tv',
})

export const base = {
  value: {
    brand: '',
    model: '',
    description: '',
    photo: '',
    price: 0,
  },
  schema: {
    brand: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    // photo: Yup.mixed().when('isArray', {
    //   is: Array.isArray,
    //   then: Yup.array().of(Yup.string()),
    //   otherwise: Yup.string(),
    // }),
    photo: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  },
}

export const mobile = {
  value: {
    ...base.value,
    batteryCapacity: '',
    ram: '',
    system: '',
    camera: '',
  },
  schema: {
    ...base.schema,
    batteryCapacity: Yup.string().required('Required'),
    ram: Yup.string().required('Required'),
    system: Yup.string().required('Required'),
    camera: Yup.string().required('Required'),
  },
}

export const tablets = {
  value: {
    ...base.value,
    batteryCapacity: '',
    ram: '',
    memoryHDD: '',
    wirelessCapabilities: '',
  },
  schema: {
    ...base.schema,
    batteryCapacity: Yup.string().required('Required'),
    ram: Yup.string().required('Required'),
    memoryHDD: Yup.string().required('Required'),
    wirelessCapabilities: Yup.string().required('Required'),
  },
}

export const notebooks = {
  value: {
    ...base.value,
    cpu: '',
    hardDriveType: '',
    ram: '',
    memoryHDD: '',
  },
  schema: {
    ...base.schema,
    cpu: Yup.string().required('Required'),
    hardDriveType: Yup.string().required('Required'),
    ram: Yup.string().required('Required'),
    memoryHDD: Yup.string().required('Required'),
  },
}

export const tv = {
  value: {
    ...base.value,
    smartTV: '',
    technologies: '',
    connectors: '',
    screenResolution: '',
  },
  schema: {
    ...base.schema,
    smartTV: Yup.string().required('Required'),
    technologies: Yup.string().required('Required'),
    connectors: Yup.string().required('Required'),
    screenResolution: Yup.string().required('Required'),
  },
}
