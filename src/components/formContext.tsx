import { createContext, useContext, ReactNode, useState } from 'react';

interface FormData {
  selectedCheckboxes: string[];
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  images: string[];
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);
interface FormDataProviderProps {
  children: ReactNode;
}
export const FormDataProvider = ({ children }: FormDataProviderProps) => {
  const [formData, setFormData] = useState({
    selectedCheckboxes: [],
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    images: [],
  });

  function updateFormData(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
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