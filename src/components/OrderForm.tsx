import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { API_URL } from '../environment/apiUrl';
import { IFormFields, IOptions } from '../interfaces/app.interfaces';
import { showNotification } from '../redux/slices/NotificationSlice';
import Select from "react-select";

const OrderForm: React.FC = () => {
  
    const [data, setData] = useState<IFormFields[]>([]);
    const [options, setOptions] = useState<IOptions[]>([]);
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<IFormFields>();
    const dispatch = useDispatch();
    
    useEffect(() => {
      getOptions();
      getData();
    }, [])
    
    const getOptions = () => {
      fetch(API_URL + 'test')
        .then(res => res.json())
        .then(data => setOptions(data))
        .catch(error => {
          console.log(error.message)
        })
    }
  
    const getData = () => {
      fetch(API_URL + 'orders')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => {
          console.log(error.message)
        })
    }
  
    const sendData = async (value: IFormFields) => {
      try {
        const findItem = data.find((el: IFormFields) => el.document === value.document && el.name.value === value.name.value);
        if (findItem) {
          dispatch(showNotification({color:'red', notification: true, messageNotification: 'Вы уже отправляли заявку на этот документ, она уже была учтена'}));
        } else {
          fetch(API_URL + 'orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(value)
          })
          setData([...data, value ]);
          dispatch(showNotification({color:'green', notification: true, messageNotification: 'Заявка отправлена'}));
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    const onSubmit = (data: IFormFields) => {
      sendData(data);
      reset();
      setValue('name', {value: '', label: ''});
    };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <p className="form_label">ФИО конструктора</p>
    <Controller
      name="name"
      rules={{ required: true }}
      control={control}
      render={({ field }) => <Select 
        placeholder="Выберите сотрудника"
        {...field} 
        options={options} 
      />}
    />
    {errors.name && <span className='form_error'>Выберите сотрудника</span>}

    <p className="form_label">Наименование документа</p>
    <input className="form_input" placeholder='Введите название документа' {...register("document", { required: true })} />
    {errors.document && <span className='form_error'>Введите название документа</span>}
    
    <input className="form_btn" type="submit" value="Отправить" />
  </form>
  );
}

export default OrderForm;
