import { useMutation } from "@tanstack/vue-query";
import { login } from '../../api';

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (formData) => login(formData),
  })
}

export default useLoginMutation;
