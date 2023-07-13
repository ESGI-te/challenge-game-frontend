import { useMutation } from "@tanstack/vue-query";
import { register } from '../../api';

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (formData) => register(formData),
  })
}

export default useRegisterMutation;