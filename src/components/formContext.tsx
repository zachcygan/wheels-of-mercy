'use client'
import { createContext, useContext, ReactNode, useState } from 'react';

interface FormData {
  checkboxes: string[];
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  images: string[];
  city: string;
  state: string;
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleStatus: (state: string, value: boolean) => void;
  success: boolean;
  error: boolean;
  clearState: () => void;
  handleCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string
  ) => void;
  emailTouched: boolean;
  setEmailTouched: (value: boolean) => void;
  handleFileUpload: (data: string[]) => void;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

interface FormDataProviderProps {
  children: ReactNode;
}

export const FormDataProvider = ({ children }: FormDataProviderProps) => {
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    checkboxes: [''],
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    images: [],
    city: '',
    state: '',
  });

  function updateFormData(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault();

    // Check if the input element is a file upload input
    if (e.target.type === 'file') {
      // File uploads should be handled separately
      return;
    }

    // Regular form field updates
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleFileUpload = (data: string[]) => {
    setFormData({
      ...formData,
      images: data,
    });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string
  ) => {
    const data = formData.checkboxes;
    let checkboxes = data || [];

    if (checkboxes.includes(value)) {
      checkboxes = checkboxes.filter((item: string) => item !== value);
    } else {
      checkboxes.push(value);
    }

    // Save back in localStorage
    setFormData({
      ...formData,
      checkboxes: checkboxes,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function clearState() {
    setFormData({
      checkboxes: [],
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      images: [],
      city: '',
      state: '',
    });
  }

  function handleStatus(state: string, value: boolean) {
    if (state === 'success') {
      setSuccess(value);
    } else {
      setError(value);
    }
  }

  return (
    <FormDataContext.Provider
      value={{
        formData,
        updateFormData,
        handleStatus,
        clearState,
        handleCheckboxChange,
        setEmailTouched,
        handleFileUpload,
        emailTouched,
        success,
        error,
        handleSelectChange,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export function useFormData() {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}
