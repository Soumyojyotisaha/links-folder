// components/LinkForm.js
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LinkForm = ({ onAddLink }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    onAddLink(data.link);
    toast.success('Link added successfully');
    reset();
  };

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default LinkForm;
