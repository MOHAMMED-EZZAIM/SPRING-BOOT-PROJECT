package usa.harvard.projectspringsir.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Locale;
import java.util.Optional;

public interface LocaleDao extends JpaRepository<Locale,Long> {
     Optional<Locale> findById(Long id);
}
